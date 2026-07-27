import RuthlessChaosTrailerKeywordPage, { generateMetadata } from './ruthless-chaos-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosTrailerKeywordPage />;
}
