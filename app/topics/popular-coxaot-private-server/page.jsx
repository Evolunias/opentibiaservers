import PopularCoxaotPrivateServerKeywordPage, { generateMetadata } from './popular-coxaot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCoxaotPrivateServerKeywordPage />;
}
