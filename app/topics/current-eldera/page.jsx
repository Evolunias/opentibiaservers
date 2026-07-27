import CurrentElderaKeywordPage, { generateMetadata } from './current-eldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentElderaKeywordPage />;
}
