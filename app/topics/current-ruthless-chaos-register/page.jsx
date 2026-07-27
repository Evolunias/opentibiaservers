import CurrentRuthlessChaosRegisterKeywordPage, { generateMetadata } from './current-ruthless-chaos-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRuthlessChaosRegisterKeywordPage />;
}
