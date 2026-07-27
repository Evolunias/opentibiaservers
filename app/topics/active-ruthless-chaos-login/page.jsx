import ActiveRuthlessChaosLoginKeywordPage, { generateMetadata } from './active-ruthless-chaos-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRuthlessChaosLoginKeywordPage />;
}
