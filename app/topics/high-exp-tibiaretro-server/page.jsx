import HighExpTibiaretroServerKeywordPage, { generateMetadata } from './high-exp-tibiaretro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpTibiaretroServerKeywordPage />;
}
