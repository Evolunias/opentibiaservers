import MorganaWorldKeywordPage, { generateMetadata } from './morgana-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MorganaWorldKeywordPage />;
}
