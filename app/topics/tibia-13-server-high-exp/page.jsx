import Tibia13ServerHighExpKeywordPage, { generateMetadata } from './tibia-13-server-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13ServerHighExpKeywordPage />;
}
