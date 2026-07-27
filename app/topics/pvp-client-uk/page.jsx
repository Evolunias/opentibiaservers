import PvpClientUkKeywordPage, { generateMetadata } from './pvp-client-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpClientUkKeywordPage />;
}
