import ObsidiaTibiaKeywordPage, { generateMetadata } from './obsidia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ObsidiaTibiaKeywordPage />;
}
