import EvoLaunchChileKeywordPage, { generateMetadata } from './evo-launch-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoLaunchChileKeywordPage />;
}
