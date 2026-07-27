import ActiveTibiaretroOtServerKeywordPage, { generateMetadata } from './active-tibiaretro-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaretroOtServerKeywordPage />;
}
