import ObsidiaTibiaWorldKeywordPage, { generateMetadata } from './obsidia-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ObsidiaTibiaWorldKeywordPage />;
}
