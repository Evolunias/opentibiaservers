import PvpClientCanadaKeywordPage, { generateMetadata } from './pvp-client-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpClientCanadaKeywordPage />;
}
