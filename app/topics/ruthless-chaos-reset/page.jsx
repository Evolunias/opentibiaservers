import RuthlessChaosResetKeywordPage, { generateMetadata } from './ruthless-chaos-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosResetKeywordPage />;
}
