import ActiveRuthlessChaosTibiaKeywordPage, { generateMetadata } from './active-ruthless-chaos-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRuthlessChaosTibiaKeywordPage />;
}
