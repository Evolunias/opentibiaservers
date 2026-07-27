import GunzodusSwedenServerKeywordPage, { generateMetadata } from './gunzodus-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusSwedenServerKeywordPage />;
}
