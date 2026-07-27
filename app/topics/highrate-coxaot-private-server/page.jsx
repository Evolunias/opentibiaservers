import HighrateCoxaotPrivateServerKeywordPage, { generateMetadata } from './highrate-coxaot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCoxaotPrivateServerKeywordPage />;
}
