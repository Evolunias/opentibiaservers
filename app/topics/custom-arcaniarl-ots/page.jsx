import CustomArcaniarlOtsKeywordPage, { generateMetadata } from './custom-arcaniarl-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArcaniarlOtsKeywordPage />;
}
