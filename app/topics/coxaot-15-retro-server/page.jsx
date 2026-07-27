import Coxaot15RetroServerKeywordPage, { generateMetadata } from './coxaot-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot15RetroServerKeywordPage />;
}
