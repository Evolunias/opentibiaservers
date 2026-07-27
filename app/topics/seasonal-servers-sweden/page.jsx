import SeasonalServersSwedenKeywordPage, { generateMetadata } from './seasonal-servers-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalServersSwedenKeywordPage />;
}
