import PvpServersCanadaKeywordPage, { generateMetadata } from './pvp-servers-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpServersCanadaKeywordPage />;
}
