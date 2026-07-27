import ActiveRuthlessChaosRegisterKeywordPage, { generateMetadata } from './active-ruthless-chaos-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRuthlessChaosRegisterKeywordPage />;
}
