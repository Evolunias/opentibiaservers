import ShadowcoresCommandsKeywordPage, { generateMetadata } from './shadowcores-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresCommandsKeywordPage />;
}
