import TibiaretroDonationsKeywordPage, { generateMetadata } from './tibiaretro-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroDonationsKeywordPage />;
}
