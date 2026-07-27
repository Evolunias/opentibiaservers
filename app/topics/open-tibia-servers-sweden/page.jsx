import OpenTibiaServersSwedenKeywordPage, { generateMetadata } from './open-tibia-servers-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersSwedenKeywordPage />;
}
