import TibiaretroUkServersKeywordPage, { generateMetadata } from './tibiaretro-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroUkServersKeywordPage />;
}
