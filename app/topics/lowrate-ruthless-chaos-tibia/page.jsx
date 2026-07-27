import LowrateRuthlessChaosTibiaKeywordPage, { generateMetadata } from './lowrate-ruthless-chaos-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRuthlessChaosTibiaKeywordPage />;
}
