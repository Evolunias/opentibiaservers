import LowrateElderaKeywordPage, { generateMetadata } from './lowrate-eldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateElderaKeywordPage />;
}
