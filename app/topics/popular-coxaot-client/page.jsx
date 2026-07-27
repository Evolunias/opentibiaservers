import PopularCoxaotClientKeywordPage, { generateMetadata } from './popular-coxaot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCoxaotClientKeywordPage />;
}
