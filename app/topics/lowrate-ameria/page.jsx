import LowrateAmeriaKeywordPage, { generateMetadata } from './lowrate-ameria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAmeriaKeywordPage />;
}
