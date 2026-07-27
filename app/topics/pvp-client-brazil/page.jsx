import PvpClientBrazilKeywordPage, { generateMetadata } from './pvp-client-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpClientBrazilKeywordPage />;
}
