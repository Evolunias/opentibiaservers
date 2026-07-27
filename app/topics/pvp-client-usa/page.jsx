import PvpClientUsaKeywordPage, { generateMetadata } from './pvp-client-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpClientUsaKeywordPage />;
}
