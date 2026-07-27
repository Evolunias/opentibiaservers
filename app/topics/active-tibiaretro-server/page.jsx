import ActiveTibiaretroServerKeywordPage, { generateMetadata } from './active-tibiaretro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaretroServerKeywordPage />;
}
