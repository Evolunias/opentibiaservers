import CustomArcaniarlRegisterKeywordPage, { generateMetadata } from './custom-arcaniarl-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArcaniarlRegisterKeywordPage />;
}
