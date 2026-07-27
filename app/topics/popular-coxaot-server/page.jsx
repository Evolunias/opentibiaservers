import PopularCoxaotServerKeywordPage, { generateMetadata } from './popular-coxaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCoxaotServerKeywordPage />;
}
