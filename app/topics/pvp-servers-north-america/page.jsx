import PvpServersNorthAmericaKeywordPage, { generateMetadata } from './pvp-servers-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpServersNorthAmericaKeywordPage />;
}
