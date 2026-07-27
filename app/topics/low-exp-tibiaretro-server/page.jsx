import LowExpTibiaretroServerKeywordPage, { generateMetadata } from './low-exp-tibiaretro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpTibiaretroServerKeywordPage />;
}
