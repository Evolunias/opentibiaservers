import NonPvpLaunchBrazilKeywordPage, { generateMetadata } from './non-pvp-launch-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpLaunchBrazilKeywordPage />;
}
