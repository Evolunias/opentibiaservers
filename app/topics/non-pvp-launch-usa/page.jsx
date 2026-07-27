import NonPvpLaunchUsaKeywordPage, { generateMetadata } from './non-pvp-launch-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpLaunchUsaKeywordPage />;
}
