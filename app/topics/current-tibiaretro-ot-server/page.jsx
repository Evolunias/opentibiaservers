import CurrentTibiaretroOtServerKeywordPage, { generateMetadata } from './current-tibiaretro-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaretroOtServerKeywordPage />;
}
