import HighrateElderaKeywordPage, { generateMetadata } from './highrate-eldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateElderaKeywordPage />;
}
