import PopularCoxaotKeywordPage, { generateMetadata } from './popular-coxaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCoxaotKeywordPage />;
}
