import CurrentTibiaretroServerKeywordPage, { generateMetadata } from './current-tibiaretro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaretroServerKeywordPage />;
}
