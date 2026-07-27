import NonPvpTibiaoriginsServerKeywordPage, { generateMetadata } from './non-pvp-tibiaorigins-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpTibiaoriginsServerKeywordPage />;
}
