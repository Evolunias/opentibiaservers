import ActiveEvoleraTibiaKeywordPage, { generateMetadata } from './active-evolera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoleraTibiaKeywordPage />;
}
