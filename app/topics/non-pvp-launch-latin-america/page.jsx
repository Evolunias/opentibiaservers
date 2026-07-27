import NonPvpLaunchLatinAmericaKeywordPage, { generateMetadata } from './non-pvp-launch-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpLaunchLatinAmericaKeywordPage />;
}
