import NonPvpLaunchUkKeywordPage, { generateMetadata } from './non-pvp-launch-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpLaunchUkKeywordPage />;
}
