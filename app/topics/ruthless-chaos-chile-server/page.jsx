import RuthlessChaosChileServerKeywordPage, { generateMetadata } from './ruthless-chaos-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosChileServerKeywordPage />;
}
