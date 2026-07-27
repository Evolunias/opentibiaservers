import CustomRuthlessChaosTibiaKeywordPage, { generateMetadata } from './custom-ruthless-chaos-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRuthlessChaosTibiaKeywordPage />;
}
