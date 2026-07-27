import PvpeServersSouthAmericaKeywordPage, { generateMetadata } from './pvpe-servers-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServersSouthAmericaKeywordPage />;
}
