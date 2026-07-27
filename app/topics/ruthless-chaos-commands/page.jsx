import RuthlessChaosCommandsKeywordPage, { generateMetadata } from './ruthless-chaos-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosCommandsKeywordPage />;
}
