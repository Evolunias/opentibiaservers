import PvpServersSouthAmericaKeywordPage, { generateMetadata } from './pvp-servers-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpServersSouthAmericaKeywordPage />;
}
